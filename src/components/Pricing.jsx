import React from 'react'
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      period: 'per location/month',
      description: 'Perfect for small hotels and B&Bs',
      features: [
        'Up to 25 rooms',
        'Basic reservation management',
        'Guest check-in/out',
        'Payment processing',
        'Email support',
        'Mobile app access',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$89',
      period: 'per location/month',
      description: 'Ideal for mid-size hotels',
      features: [
        'Up to 100 rooms',
        'Advanced reservation system',
        'Revenue management',
        'Channel manager integration',
        'Priority support',
        'Custom reporting',
        'Staff management',
        'Multi-language support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For hotel chains and large properties',
      features: [
        'Unlimited rooms',
        'Multi-property management',
        'Advanced analytics',
        'API access',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support'
      ],
      popular: false
    }
  ];
  
  
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  return (

    <>
    <div>
      <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#562d0b] mb-6">
            Simple, Transparent
            <span className="text-[#8b4513] block">Pricing</span>
          </h2>
          <p className="text-xl text-[#8d561e] max-w-3xl mx-auto">
            Choose the perfect plan for your hotel. All plans include a 30-day free trial 
            and can be upgraded or downgraded at any time.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <article
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-[#8d561e] scale-105' : 'border border-[#d2b48c]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#864312] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <header className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#562d0b] mb-2">{plan.name}</h3>
                <p className="text-[#8b4513] mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#6a3711]">{plan.price}</span>
                  <span className="text-[#8d561e] ml-2">{plan.period}</span>
                </div>
              </header>

              <ul className="space-y-4 mb-8" role="list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-[#8d561e] flex-shrink-0" aria-hidden="true" />
                    <span className="text-[#8b4513]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToDemo}
                className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-[#864312] text-white hover:bg-[#8b4513]'
                    : 'bg-[#f5e8d7] text-[#6a3711] hover:bg-[#d2b48c]'
                }`}
                aria-label={`Start free trial with ${plan.name} plan`}
              >
                Start Free Trial
              </button>
            </article>
          ))}
        </div>

        {/* Additional Info */}
        <aside className="mt-16 text-center">
          <div className="bg-[#faf7f2] rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#562d0b] mb-4">All Plans Include</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#8b4513]">
              <div>
                <strong>30-day free trial</strong><br />
                No credit card required
              </div>
              <div>
                <strong>Free data migration</strong><br />
                We'll move your data for free
              </div>
              <div>
                <strong>No setup fees</strong><br />
                Get started immediately
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
    </div>
    </>
  )
}

export default Pricing