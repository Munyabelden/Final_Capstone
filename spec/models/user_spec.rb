require 'rails_helper'

RSpec.describe User, type: :model do
  subject do
    User.new(first_name: 'Simon', last_name: 'Chowdery', phone: '01222648162', email: 'test@test.com', password: '11111111')
  end
  before { subject.save }

  it 'email should not be empty' do
    subject.email = nil
    expect(subject).to_not be_valid
  end

  it 'First anme should be implemented' do
    expect(subject.first_name).to eql 'Simon'
  end

  it 'Last anme should be implemented' do
    expect(subject.last_name).to eql 'Chowdery'
  end

  it 'email should be implemented' do
    expect(subject.email).to eql 'test@test.com'
  end
end
