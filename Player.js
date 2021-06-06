class Player{

  constructor()
  {
      this.spt = createSprite(650, 730, 50, 50);

      this.spt.shapeColor = "orange";
      
      

  }

  moveLeft()
  
  {
      this.spt.x = this.spt.x - 10;

  }

  moveRight()

  {
      this.spt.x = this.spt.x + 10;
  }
  
  moveUp()
  {
      this.spt.y = this.spt.y - 10;
  }

  moveDown()
  {
      this.spt.y = this.spt.y + 10;
  }
};