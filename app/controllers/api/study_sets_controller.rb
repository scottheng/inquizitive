class Api::StudySetsController < ApplicationController
	def index 
		if params[:user_id]
			user_id = params[:user_id]
			@study_sets = StudySet.where("user_id = #{user_id}")
		else 
			@study_sets = StudySet.all
		end

		render 'api/study_sets/index'
	end
	
	def show 
		@study_set = StudySet.find_by_id(params[:id])
		render 'api/study_sets/show'
	end
	
	def create 
		@study_set = StudySet.new(study_set_params) 

		if @study_set.save 
			render 'api/study_sets/show'
		else
			render json: @study_set.errors.full_messages, status: 422 
		end
		
	end
	
	def update 
		@study_set = StudySet.find_by_id(params[:id])

		if @study_set.update(study_set_params)
			render 'api/study_sets/show'
		else 
			render json: @study_set.errors.full_messages, status: 422
		end


	end
	
	def destroy 
		@study_set = StudySet.find_by_id(params[:id])
		@study_set.destroy
		render 'api/study_sets/show'
	end
	
	private 
	def study_set_params 
		params.require(:study_set).permit([:title, :description, :user_id])
	end
	
end
