function makeFriendsList(friends) {
  let nameFriends = friends.map((value)=> value.firstName + ' '+ value.lastName);
  let ul = document.createElement('ul');
  for (let friend of nameFriends){
      let li = document.createElement('li');
      li.textContent = `${friend}`;
      ul.append(li);

  }
  return ul;
}
