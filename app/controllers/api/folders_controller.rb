class Api::FoldersController < ApplicationController

	def index 
		if params[:user_id]
			user_id = params[:user_id]
			@folders = Folder.where("user_id = #{user_id}")
		else 
			@folders = Folder.all
		end
		
		render 'api/folders/index'
	end
	
	def show 
		@folder = Folder.find_by_id(params[:id])
		render 'api/folders/show'
	end
	
	def create 
		@folder = Folder.new(folder_params)

		if @folder.save 
			render 'api/folders/show'
		else
			render json: @folder.errors.full_messages, status: 422
		end
		
	end
	
	def update 
		@folder = Folder.find_by_id(params[:id])

		if @folder.update(folder_params)
			render 'api/folders/show'
		else
			render json: @folder.errors.full_messages, status: 422
		end
		
	end
	
	def destroy 
		@folder = Folder.find_by_id(params[:id])
		@folder.destroy 
		render 'api/folders/show'
	end
	
	private 
	def folder_params 
		params.require(:folder).permit([:name, :description, :user_id])
	end
	
end
