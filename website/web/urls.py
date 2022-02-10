from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name = 'homepage'),
    path('form1/', age_calc_view, name = 'FormView2'),
    path('add/', add, name = 'add'),
    path('game/', blackJack, name = 'blackjack'),
    path('cg/', cgp, name = 'cgpapage'),
    path('gpa/', gpa, name = 'gpa'),
    path('cont/', contactpage, name = 'cont'),
    

]