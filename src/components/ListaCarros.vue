<template>
  <div class="lista-carros col-12">
    <div class="card">
      <div class="card-header titulo-projeto">
        Navita
      </div>
      <div class="card-body">
        <h3 class="card-title">Veículos</h3>
        <div class="item-tabela-fipe">
          <div class="card-body">
            <div class="card-header">
              Marcas
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Marca</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="marca in marcas" v-bind:key="marca.codigo">
                  <td>
                    {{ marca.nome }}
                  </td>
                  <td>
                    <a @click="buscaModelos(marca.codigo)">Ver modelo</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="item-tabela-fipe alosom" ref="modelos">
          <div class="card-body" v-if="modelos.modelos">
            <div class="card-header">
              Modelos
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th colspan="2" scope="col">Modelo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="modelo in modelos.modelos" v-bind:key="modelo.codigo">
                  <td>
                    {{ modelo.nome }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="card-footer text-center">
        Copyright &copy; Navita 2020
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ListaCarros',
  data() {
    return {
      marcas: [],
      modelos: [],
    };
  },
  mounted() {
    this.buscarMarcas();
  },
  methods: {
    buscarMarcas() {
      const self = this;
      axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
        .then((response) => {
          if (response.status === 200) {
            self.marcas = response.data;
          }
        });
    },
    buscaModelos(idMarca) {
      const self = this;
      axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${idMarca}/modelos`)
        .then((response) => {
          if (response.status === 200) {
            self.modelos = response.data;
            self.scrollToElement();
          }
        });
    },
    scrollToElement() {
      this.$nextTick(() => {
        this.$refs.modelos.scrollIntoView({ behavior: 'smooth' });
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/_variaveis.scss';

.lista-carros{
  margin: 3em 0 2em;
  .titulo-projeto{
    z-index: 9999;
    color: #3CCD97;
    font-weight: 700;
    font-size: 1.1em;
    background: $background-header-footer;
    border: none;
    box-shadow: 0px 10px 30px $card-header-shadow;
  }
  .card{
    border: none;
    box-shadow: 0px 30px 30px 0 $card-header-shadow;
    .card-body{
      background: $background-color-default;
      .card-title{
        font-size: 1.6em;
        font-weight: 600;
      }
    }
    .item-tabela-fipe{
      margin-top: 1.5em;
      .card-body{
        background: #fff;
        padding: 0 0 1.1em 0;
        border-radius: 10px;
        box-shadow: 0px 5px 15px 2px $card-header-shadow;
      }
      .card-header{
        color: #4F73DF;
        font-weight: 700;
        background: $background-card-header;
        border-bottom: 1px solid rgba(0,0,0,0.09);
        padding: 1em 0 1em 1em;
      }
      table{
        max-width: 95%;
        margin: 1.5em auto 0;
        thead{
          th{
            font-weight: 700;
            border-top: 1px solid $table-border-color;
            border-bottom: 1px solid rgba(0,0,0,0.15);
          }
        }
        tbody{
          td{
            border-color: $table-border-color;
            a{
              color: $button;
              font-weight: 600;
              text-decoration: none;
              &:active{
                color: $button-active;
              }
              &:hover{
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .card-footer{
      border-top: none;
      background: $background-header-footer;
      font-size: 0.9em;
      margin-bottom: 0.5em;
    }
  }
}
</style>
