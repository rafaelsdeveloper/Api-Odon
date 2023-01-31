from concurrent.futures import thread
from email.headerregistry import Address
from http import client, server
import socket
import threading

HOST = '127.0.0.1'
PORT = 9090

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind((HOST, PORT))

server.listen()
client =[]
nicknames = []
    def broadcast(message):
        for client in clients:
            client.send(message)

    def handle(client):
        pass


    def received():
    while True:
        client, Address = server.accept()
        print(f"Connected with {str(Address)}!")

        client.send("NICK".encode('utf-8'))
        nickname = client.recv(1024)

        nicknames.append(nickname)
        clients.append(client)

        print(f "Nickname of the client is {nickname}")
        broadcast(f"{nickname} connected to the server!\n".encode('utf-8'))
        client.send("connected to the server".encode('utf-8'))

        thread = threading.Thread(target=handle, args=(client,))

