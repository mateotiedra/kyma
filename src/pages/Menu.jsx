import DishList from '../components/DishesList';

const Menu = () => {
  return (
    <div className='page-container'>
      <div className='flex flex-col gap-y-2'>
        <DishList
          title='BRIOSH'
          subtitle='Servie avec une salade Petite verte ou Petite chou'
          dishes={[
            {
              name: 'Lobster kiss',
              price: '21',
              ingredients:
                'Brioche beurrée, homard, cébette, ciboulette, mayonnaise au citron',
              modelUrl: '/assets/models/lobster-kiss.glb',
            },
            {
              name: 'Briosh dog',
              price: '10',
              ingredients:
                'Brioche beurrée, saucisse de poulet, oignons caramélisés, ketchup, moutarde',
              modelUrl: '/assets/models/briosh-dog.glb',
            },
            {
              name: 'Oriental chick',
              price: '17',
              ingredients:
                'Brioche beurrée, poulet fondant, poivrons, sauce aux épices orientales',
              modelUrl: '/assets/models/oriental-chick.glb',
            },
            {
              name: 'Effilo slaw',
              price: '19',
              ingredients:
                'Brioche beurrée, bœuf effiloché, salade de chou en coleslaw',
              modelUrl: '/assets/models/effilo-slaw.glb',
            },
            {
              name: 'From’thon',
              price: '15',
              ingredients: 'Brioche beurrée, thon, cheddar fondu',
            },
            {
              name: 'Mushroom fever',
              price: '16',
              ingredients:
                'Brioche beurrée, champignons, oignons caramélisés, épinards, cheddar, chou rouge',
              modelUrl: '/assets/models/mushroom-fever.glb',
              scale: 25,
            },
            {
              name: 'Brioshette du moment',
              price: '6',
              fontStyle: 'text-yellow-500 text-xl',
              ingredients: 'Petite brioche beurrée, garniture du moment',
            },
            {
              name: 'Option brioche sans gluten',
              price: '+3',
              fontStyle: 'text-pink-500 text-xl',
            },
          ]}
        />
        <DishList
          title='SALADES'
          dishes={[
            {
              name: 'Buddha bowl',
              price: '17',
              ingredients:
                'Quinoa tricolore, avocat, mangue, pois chiche, houmous maison, grenade',
            },
            {
              name: 'Tuna mango tango',
              price: '19',
              ingredients:
                'Pickles, thon rouge cru mariné, avocat, mangue, grenade',
            },
            {
              name: 'Oriental chick bowl',
              price: '16',
              ingredients:
                'Poulet fondant, boulghour, pois chiche, grenade, coriandre',
            },
            {
              name: 'Veggie rôtie',
              price: '15',
              ingredients:
                'Légumes de saison rôtis à l’huile d’olive, boulghour',
            },
            {
              name: 'Petite verte',
              price: '5',
              ingredients:
                'Mesclun de salade, crudités de saison, vinaigrette à la moutarde',
              fontStyle: 'text-yellow-500 text-xl',
            },
            {
              name: 'Petite chou',
              price: '5',
              ingredients: 'Salade de choux, carottes, mayonnaise',
              fontStyle: 'text-yellow-500 text-xl',
            },
          ]}
        />
        <DishList
          title='DESSERTS'
          dishes={[
            {
              name: 'Briosh perdue pistache',
              price: '12',
              ingredients: '',
            },
            {
              name: 'Briosh perdue praliné',
              price: '12',
              ingredients: '',
            },
            {
              name: 'Briosh perdue vanille',
              price: '12',
              ingredients: '',
            },
            {
              name: 'Cookie pistache',
              price: '6.50',
              ingredients: '',
            },
            {
              name: 'Cookie praliné',
              price: '6.50',
              ingredients: '',
            },
            {
              name: 'Cookie framboise',
              price: '6.50',
              ingredients: '',
            },
            {
              name: 'Cookie 3 chocolats',
              price: '4.50',
              ingredients: '',
            },
          ]}
        />
        <DishList
          title='DRINKS'
          dishes={[
            { name: 'Evian', price: '4', ingredients: '3 dL' },
            { name: 'San Pellegrino', price: '4.50', ingredients: '5 dL' },
            {
              name: 'Coconut water',
              price: '5.50',
              ingredients: 'Classic ou pressed – 3 dL',
            },
            {
              name: 'Thé froid maison',
              price: '5',
              ingredients: 'Du moment – 3 dL',
            },
            { name: 'Limonade maison', price: '5', ingredients: '3 dL' },
            { name: 'Bissap maison', price: '5', ingredients: '3 dL' },
            { name: 'Coca-Cola', price: '4.50', ingredients: '3 dL' },
            { name: 'Coca-Cola Zero', price: '4.50', ingredients: '3 dL' },
            {
              name: 'Puerto Maté',
              price: '6',
              ingredients: 'Grenade, citronnelle ou classique – 5 dL',
            },
            {
              name: 'Urban Kombucha',
              price: '5.50',
              ingredients: 'Ginger, framboise, passion ou hibiscus – 3 dL',
            },
            {
              name: 'Ginger shot',
              price: '4.50',
              ingredients: 'Pomme, miel ou citron – 60 mL',
            },
            {
              name: 'Living Things',
              price: '6',
              ingredients: 'Framboise, pêche ou pastèque – 3 dL',
            },
            {
              name: 'Kult Kefir',
              price: '6',
              ingredients:
                'Yuzu/mandarine, citron/gingembre ou passion/houblon – 3 dL',
            },
          ]}
        />
        <DishList
          title='COFFEE & TEA'
          dishes={[
            { name: 'Espresso', price: '3.90', ingredients: '' },
            { name: 'Double espresso', price: '5', ingredients: '' },
            { name: 'Americano', price: '5.50', ingredients: '' },
            { name: 'Ristretto', price: '3.90', ingredients: '' },
            { name: 'Cappuccino', price: '6.50', ingredients: '' },
            { name: 'Flat white', price: '6.90', ingredients: '' },
            { name: 'Latte macchiato', price: '6.50', ingredients: '' },
            { name: 'Caffe latte', price: '6.90', ingredients: '' },
            { name: 'Iced latte', price: '6.90', ingredients: '' },
            { name: 'Espresso macchiato', price: '4.50', ingredients: '' },
            { name: 'Thé oolong', price: '4.50', ingredients: '5 dL' },
            { name: 'Single Origin Coffee', price: '+1.50', ingredients: '' },
          ]}
        />
      </div>
    </div>
  );
};

export default Menu;
