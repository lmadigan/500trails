class Api::LikesController < ApplicationController

  def create
    @like = Like.new(user_id: current_user.id, trip_id: params[:trip_id])
    if @like.save
      @user = User.find(current_user.id)
      render 'api/users/show'
    else
      render(
        json: ["Invalid like request"],
        status: 401
      )
    end
  end

  def destroy
    @like = Like.find_by(user_id: current_user.id, trip_id: params[:trip_id])
    @like.destroy
    @user = User.find(current_user.id)
    render 'api/users/show'
  end


end