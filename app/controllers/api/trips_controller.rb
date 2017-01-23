class Api::TripsController < ApplicationController

  def create
    @trip = Trip.new(trip_params)
    if @trip.save
      Image.create(trip_id: @trip.id, image_url: params[:trip][:image_url])
      @user = User.find(current_user.id)
      render 'api/users/show'
    else
      render(
      json: @trip.errors.full_messages, status: 422
      )
    end
  end

  def destroy
   @trip = current_user.trips.find(params[:id])
   @trip.destroy
   @user = User.find(current_user.id)
   render 'api/users/show'
  end

  def update
    @trip = Trip.find(params[:id])
    if @trip.update(trip_params)
      @user = User.find(id: currentUser.id)
      render 'api/users/show'
    else
      render(json: ["This cannot be updated"], status: 401)
    end
  end

  def index
    if current_user
      @trips = Trip.includes(:user).where.not(user_id: current_user.id).all
    else
      @trips = Trip.includes(:user).all
    end
    render :index
  end

  def show
    @trip = Trip.includes(:user, :images).find(params[:id])
  end

  private

  def trip_params
    params.require(:trip).permit(:title, :description, :user_id, :location)
  end

end
