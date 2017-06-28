function Comprobar(obj)

          {

          if ( !obj.Opciones[0].checked &&

               !obj.Opciones[1].checked &&

       !obj.Opciones[2].checked)

      {

       alert("Debe elegir una opción")

       return false;

      }

  return true

  }
