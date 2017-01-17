class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render(
      json: @user.errors.full_messages, status: 422
      )
    end
  end

  def show
      @user = User.includes(:trips, :images).find(params[:id])
  end


  private
  def user_params
    params.require(:user).permit(:user_name, :password)
  end

end
