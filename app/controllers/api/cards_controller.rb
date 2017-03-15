class Api::CardsController < ApplicationController
	def index 
		@cards = StudySet.all

		render 'api/cards/index'
	end
	
	def show 
		@card = StudySet.find_by_id(params[:id])

		render 'api/cards/show'
	end
	
	def create 
		@card = StudySet.new(card_params) 

		if @card.save 
			render 'api/cards/show'
		else
			render json: @card.errors.full_messages, status: 422 
		end
		
	end
	
	def edit 
		@card = StudySet.find_by_id(params[:id])

		if @card.update(card_params)
			render 'api/cards/show'
		else 
			render json: @card.errors.full_messages, status: 422
		end


	end
	
	def destroy 
		@card = StudySet.find_by_id(params[:id])
		@card.destroy
		render 'api/cards/show'
	end
	
	private 
	def card_params 
		params.require(:card).permit([:title, :user_id])
	end
end
