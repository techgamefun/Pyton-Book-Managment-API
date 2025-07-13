# populate_books.py

import os
import django
import random
from faker import Faker

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bookapi.settings')
django.setup()

from api.models import Book  # adjust your app/model name

fake = Faker()

def create_books(n=100):
    books = []
    for _ in range(n):
        book = Book(
            title=fake.sentence(nb_words=3),
            author=fake.name(),
            price=round(random.uniform(100, 999), 2)
        )
        books.append(book)

    Book.objects.bulk_create(books)
    print(f"✅ {n} books inserted successfully!")

if __name__ == "__main__":
    create_books()
