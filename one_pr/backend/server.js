import express from 'express';
import 'dotenv/config'
const app = express();

app.get('/',(req,res)=>{

    res.send('server is ready ')
})

app.get('/animals',(req,res)=>{
    const animals =  [
        {
          "id": 1,
          "title": "Lion",
          "desc": "The lion is a large predatory cat known for its majestic mane and powerful roar. It is often referred to as the 'king of the jungle.'"
        },
        {
          "id": 2,
          "title": "Elephant",
          "desc": "The elephant is a massive mammal with a long trunk and large tusks. It is known for its intelligence, strong social bonds, and herbivorous diet."
        },
        {
          "id": 3,
          "title": "Giraffe",
          "desc": "The giraffe is the tallest land animal, known for its long neck and distinctive spotted coat. It primarily feeds on leaves from tall trees."
        },
        {
          "id": 4,
          "title": "Penguin",
          "desc": "The penguin is a flightless bird adapted for life in the water. It is known for its black and white plumage and its waddling gait on land."
        },
        {
          "id": 5,
          "title": "Dolphin",
          "desc": "The dolphin is an intelligent marine mammal known for its playful behavior and communication skills. It is often associated with friendliness."
        },
        {
          "id": 6,
          "title": "Kangaroo",
          "desc": "The kangaroo is a marsupial with powerful hind legs, adapted for hopping. It carries and nurses its young, called joeys, in a pouch."
        },
        {
          "id": 7,
          "title": "Tiger",
          "desc": "The tiger is a large cat known for its distinctive orange coat with black stripes. It is a powerful predator and symbolizes strength and bravery."
        },
        {
          "id": 8,
          "title": "Butterfly",
          "desc": "The butterfly is an insect with colorful wings and a transformative life cycle, undergoing metamorphosis from a caterpillar to a beautiful adult."
        },
        {
          "id": 9,
          "title": "Panda",
          "desc": "The panda is a bear native to China, known for its distinctive black and white coat. It primarily feeds on bamboo and is an endangered species."
        },
        {
          "id": 10,
          "title": "Cheetah",
          "desc": "The cheetah is a fast and agile big cat, known for its incredible speed and spotted coat. It is the fastest land animal."
        }
      ];

      res.send(animals)
})



const port = process.env.PORT 

app.listen(port,()=>{
    console.log(`serve at ${port}`);
})
