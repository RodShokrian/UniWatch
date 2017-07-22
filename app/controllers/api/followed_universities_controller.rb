class Api::FollowedUniversitiesController < ApplicationController
  def index
    @follows = FollowedUniversity.where({followerId: params[:user_id]})
    render "api/followed_universities/index"
  end

  def create
    debugger
    @follow = FollowedUniversity.new(follow_params)
    if @follow.save
      render "api/followed_universities/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = FollowedUniversity.find_by_id(params[:followeduniversity][:id])
    @follow.destroy
    render json: @follow.errors.full_messages
  end

  def show
      @follow = FollowedUniversity.find(params[:id])
      render :show
  end

  private

  def follow_params
    params.require(:followeduniversity).permit(:id, :followerId, :uniId)
  end

end
