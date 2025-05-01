"""
This module defines serializers for the Sport and Participant models, 
used to convert model instances to JSON and validate incoming data.

Classes:
    ParticipantSerializer:
        A serializer for the Participant model, including fields:
        - id: The unique identifier of the participant.
        - name: The name of the participant.
        - age: The age of the participant.

    SportSerializer:
        A serializer for the Sport model, including fields:
        - id: The unique identifier of the sport.
        - name: The name of the sport.
        - description: A brief description of the sport.

    SportDetailSerializer:
        A serializer for the Sport model with additional details, including:
        - id: The unique identifier of the sport.
        - name: The name of the sport.
        - description: A brief description of the sport.
        - participants: A nested list of participants associated with the sport, 
          serialized using the ParticipantSerializer.
"""

from rest_framework import serializers

from .models import Sport, Participant

class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = ['id', 'name', 'age']

class SportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sport
        fields = ['id', 'name', 'description']

class SportDetailSerializer(serializers.ModelSerializer):
    participants = ParticipantSerializer(many=True)

    class Meta:
        model = Sport
        fields = ['id', 'name', 'description', 'participants']
