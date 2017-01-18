class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    if @like.save
      render 'api/users/show'
    else
      render(
        json: ["Invalid like request"],
        status: 401
      )
    end
  end

  def destroy

  end

  private

  def image_params
    params.require(:like).permit(:user_id, :trip_id)
  end

end
