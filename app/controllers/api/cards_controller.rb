class Api::CardsController < ApplicationController
	def index 
		if params[:study_set_id]
			study_set_id = params[:study_set_id]
			@cards = Card.where("study_set_id = #{study_set_id}")
		else 
			@cards = Card.all
		end

		render 'api/cards/index'
	end
	
	def show 
		@card = Card.find_by_id(params[:id])

		render 'api/cards/show'
	end
	
	def create
		@card = Card.new(card_params) 

		if @card.save 
			render 'api/cards/show'
		else
			render json: @card.errors.full_messages, status: 422 
		end
		
	end
	
	def update
		@card = Card.find_by_id(params[:id])

		if @card.update(card_params)
			render 'api/cards/show'
		else 
			render json: @card.errors.full_messages, status: 422
		end


	end
	
	def destroy 
		@card = Card.find_by_id(params[:id])
		@card.destroy
		render 'api/cards/show'
	end
	
	private 
	def card_params 
		params.require(:card).permit([:term, :definition, :study_set_id])
	end
end
