class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  has_many :consultations

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :phone, allow_blank: true, format: { with: /\A\d+\z/, message: 'should only contain digits' }

  def jwt_payload
    super
  end

end
  