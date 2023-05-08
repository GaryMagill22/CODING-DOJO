

# implement __init__( name , type , tricks ):
class Pet:
    def __init__(self, name, type, tricks) -> None:
        self.name = name
        self.type = type
        self.tricks = tricks

    def sleep(self):
        print(f"{self.name} is sleeping, do not disturb")

    
    def eat(self):
        print(f"{self.name} is eating!")

    
    def play(self):
        print(f"{self.name} is playing")
    
    
    def noise(self):
        print(f"{self.name} is making some noise!")

Pet1 = Pet('Frankie', 'Dog', 'fetch beer')
# implement the following methods:
# sleep() - increases the pets energy by 25
# eat() - increases the pet's energy by 5 & health by 10
# play() - increases the pet's health by 5
# noise() - prints out the pet's sound