from django.core.management.base import BaseCommand
from api.models import Sport, Participant
import random

class Command(BaseCommand):
    help = 'Populate the database with 12 sports: 4 unique + 2 shared participants each'

    def handle(self, *args, **kwargs):
        # Clear existing data
        Sport.objects.all().delete()
        Participant.objects.all().delete()

        sports_data = [
            {"name": "Football", "description": "A team sport played with a spherical ball between two teams of 11 players."},
            {"name": "Basketball", "description": "A game played between two teams of five players on a rectangular court."},
            {"name": "Tennis", "description": "A racket sport that can be played individually or between two teams of two players each."},
            {"name": "Cricket", "description": "A bat-and-ball game played between two teams of eleven players on a field."},
            {"name": "Swimming", "description": "An individual or team sport that requires the use of one's entire body to move through water."},
            {"name": "Volleyball", "description": "A team sport in which two teams of six players are separated by a net."},
            {"name": "Baseball", "description": "A bat-and-ball game played between two opposing teams who take turns batting and fielding."},
            {"name": "Hockey", "description": "A sport in which two teams play against each other by trying to maneuver a ball or a puck into the opponent's goal."},
            {"name": "Badminton", "description": "A racquet sport played using racquets to hit a shuttlecock across a net."},
            {"name": "Table Tennis", "description": "A sport in which two or four players hit a lightweight ball back and forth across a table."},
            {"name": "Athletics", "description": "A collection of sporting events that involve competitive running, jumping, throwing, and walking."},
            {"name": "Boxing", "description": "A combat sport in which two people throw punches at each other for a predetermined amount of time."}
        ]

        # 48 unique participant names
        unique_participants_names = [
            "Liam Carter", "Emma Blake", "Noah Evans", "Olivia Reed",
            "Ethan Foster", "Ava Brooks", "Mason Hayes", "Sophia Ward",
            "Logan Bennett", "Isabella West", "Lucas Morgan", "Mia Hughes",
            "Elijah Perry", "Charlotte Simmons", "James Coleman", "Amelia Long",
            "Benjamin Gray", "Harper Powell", "Jacob Rivera", "Evelyn Cox",
            "Michael Hughes", "Abigail Flores", "William James", "Ella Price",
            "Alexander Torres", "Scarlett Butler", "Daniel Patterson", "Luna Sanders",
            "Matthew Ross", "Grace Jenkins", "Henry Ramirez", "Chloe Bryant",
            "Jackson Jenkins", "Zoe Griffin", "Sebastian Kelly", "Penelope Foster",
            "Aiden Russell", "Victoria Stephens", "David Richardson", "Aria Freeman",
            "Joseph Dean", "Layla Hamilton", "John Barker", "Nora Wells",
            "Samuel Murray", "Ellie Armstrong", "Gabriel Hoffman", "Hazel Beck"
        ]


        # 12 shared participant names
        shared_participants_names = [
            "Caleb Cross", "Leah Sutton", "Nathan Blake", "Stella Barrett",
            "Aaron Logan", "Lucy Norton", "Owen Holt", "Clara Doyle",
            "Miles Boone", "Naomi Walsh", "Leo Craig", "Ruby Pratt"
        ]


        # Create sports
        sports = []
        for data in sports_data:
            sports.append(Sport.objects.create(
                name=data["name"],
                description=data["description"]
            ))

        # Create unique participants and assign 4 per sport
        unique_participants = []
        for name in unique_participants_names:
            unique_participants.append(Participant.objects.create(
                name=name,
                age=random.randint(18, 35)
            ))

        unique_index = 0
        for sport in sports:
            for _ in range(4):  # 4 unique per sport
                participant = unique_participants[unique_index]
                participant.sports.add(sport)
                unique_index += 1

        # Create shared participants
        shared_participants = []
        for name in shared_participants_names:
            shared_participants.append(Participant.objects.create(
                name=name,
                age=random.randint(18, 35)
            ))

        # Assign each shared participant to 2 different sports
        sport_pairs = []
        for i in range(0, len(sports), 2):
            sport_pairs.append((sports[i], sports[i+1]))

        for i, participant in enumerate(shared_participants):
            sport1, sport2 = sport_pairs[i % len(sport_pairs)]
            participant.sports.add(sport1)
            participant.sports.add(sport2)

        self.stdout.write(self.style.SUCCESS("Successfully populated 12 sports with 4 unique and 2 shared participants each."))
