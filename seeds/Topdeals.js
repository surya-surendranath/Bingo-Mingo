exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('Topdeals').del(),

    knex('Topdeals').insert({id: 1, Vendor: "Vendoe1", Title: "Just Rs.399 for 1 Beer (650ml) + 1 Portion Of Travancore Chicken Fry + 1 Green Salad From Menorah - Koder House, Fort Kochi", Deal_price: "$500",Old_price: "$1000", Category: "Topdeals",Image1:"../images/hotel1.jpg",Rating:"3",people_bought:"230",People_Reviewed:"100",Valid:"28 Jan, 2017 - 28 Apr, 2017"}),
    knex('Topdeals').insert({id: 2, Vendor: "Vendoe2", Title: "Nice Chicken enjoy hehe.., Fort Kochi", Deal_price: "$500",Old_price: "$1000", Category: "Topdeals",Image1:"../images/hotel2.1.jpg",Rating:"3",people_bought:"230",People_Reviewed:"100",Valid:"28 Jan, 2017 - 28 Apr, 2017"}),
    knex('Topdeals').insert({id: 3, Vendor: "Vendoe2", Title: "new deal this is interesting get it..", Deal_price: "$500",Old_price: "$1000", Category: "Topdeals",Image1:"../images/hotel3.jpg",Rating:"3",people_bought:"230",People_Reviewed:"100",Valid:"28 Jan, 2017 - 28 Apr, 2017"}),
    knex('Topdeals').insert({id: 4, Vendor: "Vendoe2", Title: "Todays specia;l biriyani, Fort Kochi", Deal_price: "$500",Old_price: "$1000", Category: "Topdeals",Image1:"../images/hotel4.jpg",Rating:"3",people_bought:"230",People_Reviewed:"100",Valid:"28 Jan, 2017 - 28 Apr, 2017"})
   


);
};



    // Inserts seed entries
