
using System;
using System.Collections.Generic;
using UMFit_WebAPI.Models.Data.DAO;
using UMFit_WebAPI.Models.UMFit_LN.Avaliacao;
using UMFit_WebAPI.Models.UMFit_LN.Utilizadores.Interfaces;

namespace UMFit_WebAPI.Models.UMFit_LN
{
    public class UMFit_LN
    {
        private readonly UtilizadorDAO utilizadoresDAO = new UtilizadorDAO();
        
        public UMFit_LN()
        {
            //empty constructor
        }

        public InterfaceUtilizador Authenticate(string userDtoEmail, string userDtoPassword)
        {
            return utilizadoresDAO.LogIn(userDtoEmail, userDtoPassword);
        }

        public int TypeUser(string email)
        {
            
            return utilizadoresDAO.TypeUser(email);
        }

        public bool isUserOnline(string email)
        {
            return utilizadoresDAO.isUserOnline(email);
        }

        public void logout(string email)
        {
            utilizadoresDAO.LogOut(email);
        }
        
        /*
           Função que gera uma lista com parametros das avaliações do cliente em causa, associados à data da sua realização
           A função recebe o email do cliente, o parâmetro pretendido (peso, altura, massa_magra,...) e um bool para indicar
           que tipo de parâmetro é pretendido
        */
        public List<Registo_Avaliaçao> Generate_Reg(string emailCliente, string param, bool isCompCorp)
        {
            List<Avaliaçao> listA = AvaliaçaoDAO.GetAvaliaçoesRealizadas(emailCliente);

            List<Registo_Avaliaçao> reg = new List<Registo_Avaliaçao>();

            Registo_Avaliaçao r;

            for(int i = 0;  i < listA.Count; i++)
            {
                r = new Registo_Avaliaçao(listA[i].GetParam(param, isCompCorp), listA[i].data);
                reg.Add(r);
            }

            return reg;
        }
    }
}