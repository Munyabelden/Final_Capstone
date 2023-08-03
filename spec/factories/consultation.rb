FactoryBot.define do
    factory :consultation do
      association :user
      association :doctor
  
      duration { 60 }
      city { 'New York' }
      date { '2023-07-27' }
      consultation_type { 'online' }
    end
  end
  