class Api::ImagesController < ApplicationController
  def index
    @images = Image.all
    render :index
  end

  def create
    @image = Image.new(image_params)
    if @image.save
      render 'api/users/show'
    else
      render(
        json: ["Invalid image params"],
        status: 401
      )
    end
  end

  private

  def image_params
    params.require(:image).permit(:image_url, :lat, :long, :trip_id)
  end

end
