class CommentsController < ApplicationController

    def create
        @post = Post.find params[:post_id]
        @comment  = Comment.new(comments_params)
        @comment.post  = @post

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

end



