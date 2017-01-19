class Api::TripsController < ApplicationController

  def create
    @trip = Trip.new(trip_params)
    if @trip.save
      Image.create(trip_id: @trip.id, image_url: params[:trip][:image_url])
      render :show
    else
      render(
      json: @trip.errors.full_messages, status: 422
      )
    end
  end

  def destroy
   @trip = current_user.trips.find(params[:id])
   @trip.destroy
   render 'api/users/show'
  end

  def update
    @trip = Trip.find(params[:id])
    if @trip.update(trip_params)
      render 'api/users/show'
    else
      render(json: ["This cannot be updated"], status: 401)
    end
  end

  def index
    @trips = Trip.includes(:user).where(user_id: currentUser.id).all
    render :index
  end

  def show
    @trip = Trip.includes(:user, :images).find(params[:id])
  end

  private

  def trip_params
    params.require(:trip).permit(:title, :description, :user_id, :location)
  end

  # def image_url
  #   params.require(:trip).permit(:image_url)
  # end
end
