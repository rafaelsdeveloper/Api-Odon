from django.db import models
from uuid import uuid4

# Create your models here.

class Books(models.Model):    
    id_Book = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=255) 
    data_nascimento = models.IntegerField()
    nif = models.IntegerField()
    status = models.CharField(max_length=255)
    data_criacao = models.IntegerField() 

class Endereco(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False )
    paciente_id = models.UUIDField(primary_key=True, default=uuid4, editable=false)
    numero_postal =models.IntegerField() 
    rua = models.CharField(max_length=255)
    cidade = models.CharField(max_length=255)
    numero_imovel = models.IntegerField()
    referencia = models.CharField(max_length=255)
    complemento = models.CharField(max_length=255)
    status = models.CharField(max_length=255)
    data_criacao = models.IntegerField()

class Contato(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False )
    id_pessoa = models.UUIDField(primary_key=True, default=uuid4, editable=False )
    tipo_pessoa = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    telefone = models.CharField(max_length=255)
    data_criacao = models.IntegerField()

class Acesso (models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False )
    id_pessoa = models.UUIDField(primary_key=True, default=uuid4, editable=False )
    email = models.CharField(max_length=255)
    senha = models.CharField(max_length=255)
    status = models.CharField(max_length=255)
    data_criacao = models.IntegerField()

class Colaborador(models.Model):
    id =  models.UUIDField(primary_key=True, default=uuid4, editable=False )
    id_colaborador =  models.UUIDField(primary_key=True, default=uuid4, editable=False )
    id_contato_colaborador =  models.UUIDField(primary_key=True, default=uuid4, editable=False )
