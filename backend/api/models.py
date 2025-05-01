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
