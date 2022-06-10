from django.shortcuts import render, redirect
from estagio.form import EstagioForm
from estagio.models import Estagito

# Create your views here.

def home(request):
    data = {}
    data['db'] = Estagito.objects.order_by('-id')
    return render(request, 'index.html', data)
    
def form(request):
    data = {}
    data['form'] = EstagioForm()
    return render(request, 'adicionar.html', data)

def create(request):
    form = EstagioForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('home')  
