class Api::TripsController < ApplicationController

  def create
    @trip = Trip.new(trip_params)
    if @trip.save
      render :show
    else
      render(
      json: @trip.errors.full_messages, status: 422
      )
    end
  end

  def destroy
   @trip = current_user.todos.find(params[:id])
   @trip.destroy
   render :index
  end

  def update
    @trip = Trip.find(params[:id])
    if @trip.update(trip_params)
      render :show
    else
      render(json: ["This cannot be updated"], status: 401)
    end
  end

  def index
    @trips = Trip.all.where(user_id: currentUser.id)
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
