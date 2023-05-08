class Ninja:
# implement __init__( first_name , last_name , treats , pet_food , pet )
    def __init__(self, first_name, last_name, treats, pet, pet_food) -> None:
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet = pet
        self.pet_food = pet_food


    def walk(self):
        print(f'{self.first_name} {self.last_name} is walking!')

    def feed(self):
        print(f'{self.first_name} {self.last_name} is eating!')

    def bathe(self):
        print(f'{self.first_name} {self.last_name} is taking a hot shower!')


Ninja1 = Ninja('Jackie', 'Chan', 'jelly beans', 'mini-dachshund', 'dog food' )


# implement the following methods:
# walk() - walks the ninja's pet invoking the pet play() method
# feed() - feeds the ninja's pet invoking the pet eat() method
# bathe() - cleans the ninja's pet invoking the pet noise() method
