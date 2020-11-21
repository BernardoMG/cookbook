module Helpers
  module Recipes
    def self.recipes_response
      {
        'recipes': [
          {
            'title': 'Cauliflower “Steak”',
            'subtitle': 'with Almond-Olive Relish and Beans',
            'category': {
              'displayText': 'Veggie'
            },
            'chef': {
              'name': 'Dawn Perry'
            },
            'assumedIngredients': [
              {
                'name': 'coarse salt'
              },
              {
                'name': 'freshly ground black pepper'
              },
              {
                'name': 'olive oil'
              }
            ]
          },
          {
            'title': 'Chicken and Dumplings',
            'subtitle': "with Carrots and 'Fresh' Thyme",
            'category': {
              'displayText': 'Meat'
            },
            'chef': {
              'name': 'Jennifer Aaronson'
            },
            'assumedIngredients': [
              {
                'name': 'coarse salt'
              },
              {
                'name': 'freshly ground black pepper'
              },
              {
                'name': 'all-purpose flour '
              },
              {
                'name': 'olive oil'
              }
            ]
          }
        ]
      }
    end
  end
end
