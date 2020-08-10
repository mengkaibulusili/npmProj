import sqlite3
import os
dbName = "shop.db"

if __name__ == "__main__":
  dir = os.path.dirname(__file__)
  dbFileName = os.path.join(dir, dbName)
  conn = sqlite3.connect(dbFileName)
