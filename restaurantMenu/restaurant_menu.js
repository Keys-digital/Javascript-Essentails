const breakfastMenu = ['Pancakes -$12', 'Eggs Benedict- $22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
const mainCourseMenu = ['Steak -$12/lb', 'Pasta -$1.29/lb', 'Burger -$7', 'Salmon -20/lb'];
const dessertMenu = ['Cake -$37', 'Ice Cream -$6.02', 'Pudding -$4', 'Fruit Salad -$6'];

// Display breakfast menu items
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// Display main course menu items
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// Display dessert menu items
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
