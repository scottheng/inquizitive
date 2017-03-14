class User < ApplicationRecord
	validates :username, :password_digest, :email, :session_token, presence: true 
	validates :type, inclusion: { in: $w(STUDENT TEACHER), message: "%{value} is not a valid type" }
	validates :password, length: { minimum: 8, allow_nil: true }
	after_initialize :ensure_session_token 

	attr_reader :password 

	def self.generate_session_token 
		SecureRandom::urlsafe_base64(16)
	end
	
	def self.find_by_credentials(username, password) 
		user = User.find_by_username(username) 
		return nil unless user 
		user.is_password?(password) ? user : nil 
	end

	def password=(password) 
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end
	
	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token! 
		self.session_token = self.class.generate_session_token 
		self.save!
		self.session_token 
	end
	
	private 
	def ensure_session_token 
		self.session_token ||= self.class.generate_session_token 
	end
	
end
