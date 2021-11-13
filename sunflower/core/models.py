from django.db import models

class TypeFlower(models.Model):
    """ Тип цветка """
    name = models.CharField(verbose_name="Название", max_length=255)
    weight_per_thousand = models.FloatField(verbose_name="Вес на 1000 шт.", default=0.0)

    def __str__(self) -> str:
        return self.name


class Flower(models.Model):
    """ Цветок """
    diameter=models.FloatField(verbose_name="Диаметр", default=0.0)
    weihgt = models.FloatField(verbose_name="Вес", default=0.0)
    type_flower = models.ForeignKey("core.TypeFlower", on_delete=models.CASCADE, related_name="flowers", verbose_name="Тип растения")
    photo = models.FileField(upload_to="flowers/")
    place=models.ForeignKey("core.Place", on_delete=models.CASCADE, related_name="flowers", verbose_name="Местоположение")

    def __str__(self) -> str:
        return f"{self.type_flower}: {self.weihgt}"


class Place(models.Model):
    """ Поле """
    name = models.CharField(verbose_name="Наименвоание", max_length=1000)
    square = models.FloatField(verbose_name="Площадь", max_length=0.0) 

    def __str__(self) -> str:
        return f"{self.name}"


class Audit(models.Model):
    """ Аудит """
    number = models.IntegerField(verbose_name="Номер протокола", default=0,)
    place = models.ForeignKey("core.Place", verbose_name="Местоположение", on_delete=models.CASCADE, related_name="audits")
    gps_longitude = models.FloatField(verbose_name="Долгота")
    gps_latitude = models.FloatField(verbose_name="Широта")
    date = models.DateField(verbose_name="Дата")
    
    def __str__(self) -> str:
        return f"{self.number} от {self.date}"

    def calc(self) -> None:
        """ Заглушка для расчета урожайности """
        return None