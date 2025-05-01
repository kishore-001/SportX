"""
This module defines the models for the SportX backend API.

Classes:
    Sport:
        Represents a sport with a unique name and a description.
        Fields:
            - name (CharField): The name of the sport (unique, max length 100).
            - description (TextField): A detailed description of the sport.
        Methods:
            - __str__(): Returns the name of the sport as its string representation.

    Participant:
        Represents a participant who can engage in multiple sports.
        Fields:
            - name (CharField): The name of the participant (max length 100).
            - age (IntegerField): The age of the participant.
            - sports (ManyToManyField): A many-to-many relationship linking participants to sports.
        Methods:
            - __str__(): Returns the name of the participant as its string representation.
"""

from django.db import models


class Sport(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()

    def __str__(self):
        return self.name

class Participant(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    sports = models.ManyToManyField(Sport, related_name='participants')

    def __str__(self):
        return self.name
