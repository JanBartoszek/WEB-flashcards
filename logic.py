# import psycopg2
from psycopg2 import sql, Binary

import persistence
import server


def handle_new_question(dict):
    question = dict['question']
    answer = dict['answer']
    insert_new_question(question, answer)


@persistence.connection_handler
def insert_new_question(cursor, question, answer):
    cursor.execute(
        sql.SQL("""
                    INSERT INTO questions (question, answer)
                    VALUES (%(question)s, %(answer)s);
                """), {'question': question, 'answer': answer}
                )


@persistence.connection_handler
def select_random_question(cursor):
    cursor.execute(
        sql.SQL("""
                    SELECT question, answer FROM questions
                    ORDER BY RANDOM()
                    LIMIT 1                
                    """))
    random_set = cursor.fetchone()
    return random_set



