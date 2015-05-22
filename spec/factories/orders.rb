FactoryGirl.define do
	factory :order, :class => 'Orders' do
		order_number 1
		user nil
		quantity 1
		size "MyString"
		price 1.5
	end

end
