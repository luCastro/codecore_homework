class PostsController < ApplicationController
    
    before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
    before_action :find_post, only: [:show, :edit, :update, :destroy]
    before_action :authorize_user!, only: [:edit, :update, :destroy]

    def new
        @post = Post.new
    end

    def create
        @post = Post.new post_params
        @post.user = current_user

        if @post.save
            redirect_to post_path(@post.id)
        else
            render :new
        end
    end

    def show
        find_post
        @comment = Comment.new
        @comments = find_post.comments.order(created_at: :desc)

    end

    def destroy
        find_post.destroy
        redirect_to posts_path
    end

    def index
        @posts = Post.order(created_at: :DESC)
    end

    def edit
        find_post      
    end

    def update
        if find_post.update post_params
            redirect_to post_path(@post.id)
        else
            render :edit
        end   
    end

    private
    def post_params
        params.require(:post).permit(:title, :body)
    end

    def find_post
        @post = Post.find params[:id]
    end

    def authorize_user!
        unless can?(:crud, @post)
          flash[:danger] = "Access Denied"
          redirect_to post_path(@post)
        end
    end

end

