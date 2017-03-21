class Api::StudySetFoldersController < ApplicationController

	def create 
		@study_set_folder = StudySetFolder.new(study_set_folder_params)

		if @study_set_folder.save 
			render 'api/study_set_folders/show'
		else 
			render json: @study_set_folder.errors.full_messages, status: 422
		end
		
	end
	
	def destroy 
		@study_set_folder = StudySetFolder.find_by_id(params[:id])
		@study_set_folder.destroy 
		render 'api/study_set_folders/show'
	end
	
	private 
	def study_set_folder_params 
		params.require(:study_set_folder).permit([:study_set_id, :folder_id])
	end
	
end
