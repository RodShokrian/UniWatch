class Api::UniversitiesController < ApplicationController

  def show
    @university = University.find(params[:id])
    render :show
  end

  def index
    @universities = University.all.limit(params[:limit]).offset(params[:offset])
    render :index
  end

  private

  def university_params
    params.require(:university).permit(:id)
  end
end
