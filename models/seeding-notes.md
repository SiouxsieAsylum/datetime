## Have a third join table where you can query both the users and the events to get their information. 

### Invitation: 
  * id
  * userid
  * eventid
  * status default = pending

You need to migrate the high level tables first with no references, then seed the table with teh references

`node db/seeds/seeds.js`

### Something vaguely like:

```javascript
const event = Event.create(...);
const user = User.create(...);

Promise.all([event,user])
.then(array => {
    const event = array[0],
    const user = array[1],
    return Invitation.create(event.id,user.id)
    })
.then(invitaion => {
    console.log(invitaion)
    })

```
  
