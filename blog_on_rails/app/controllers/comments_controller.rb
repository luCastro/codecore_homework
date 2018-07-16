class CommentsController < ApplicationController
    before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
    before_action :authorize_user!, only: [:destroy]

    
    def create
        @post = Post.find params[:post_id]
        @comment  = Comment.new(comments_params)
        @comment.post  = @post
        @comment.user = current_user

        if @comment.save
            redirect_to post_path(@post)
        else
            @comments = @post.comments.order(created_at: :desc)
            render "posts/show"
        end
    end

    def destroy

        # render json: params

        @comment = Comment.find params[:id]

        @comment.destroy

        redirect_to  post_path(@comment.post)
    end

    private
    def comments_params
        params.require(:comment).permit(:body)
    end

    def authorize_user!
        @comment = Comment.find params[:id]

        unless can?(:crud, @comment)
            flash[:danger] = "Access Denied!"
            redirect_to post_path(@comment.post)
        end
    end


end



