from django import forms
from estagio.models import Estagito


class EstagioForm(forms.ModelForm):
    class Meta:
        model = Estagito
        fields = ['nome','texto','date']