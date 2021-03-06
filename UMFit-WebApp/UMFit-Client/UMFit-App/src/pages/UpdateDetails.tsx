
import { IonButton, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonLoading, IonAlert } from "@ionic/react";
import sha256 from "fast-sha256";
import { buildOutline, calendarOutline, closeOutline, peopleCircleOutline, transgenderOutline } from "ionicons/icons";
import React from "react";
import { updateUserDetailsAPI } from "../models/API/UserAPI";
import { User } from "../models/Other/User";
import "./css/UpdateDetails.css";


//---------------------------------------------------------------------------------------------------------------------------------

class UpdateDetails extends React.Component<any> {

    state: {
        password: string,
        localidade: string,
        user: User
        alert: string
        loading: string
    }

    stateToAPI: {
        userEmail: string,
        newPasswordHash: string,
        newLocalidade: string
    }

    constructor(props: any) {

        super(props);

        this.state = {
            password: "",
            localidade: "",
            loading: "",
            alert:"",
            user: this.props.user
        }

        this.stateToAPI = {
            userEmail: "",
            newPasswordHash: "",
            newLocalidade: ""
        }  
    }

    createUpdateUserState() {
        this.setState({loading:"A atualizar informações..."})
        let pass_enc = new TextEncoder();
        let encoded = pass_enc.encode(this.state.password);
        let hash256 = this.state.password.length>0? Buffer.from(sha256(encoded)).toString('hex').toUpperCase() : "";

        var local = this.state.user.localidade;
        if (this.state.localidade === "") {
            this.stateToAPI = {
                userEmail: this.props.email,
                newPasswordHash: hash256,
                newLocalidade: local
            }   
        } else {

            this.stateToAPI = {
                userEmail: this.props.email,
                newPasswordHash: hash256,
                newLocalidade: this.state.localidade
            }   
        }

        updateUserDetailsAPI(this.stateToAPI).then(()=>this.setState({loading:"", alert:"Informações atualizadas!"}));

        this.clearState(false);
    }

    clearState(b:boolean) {
        this.setState({
            password: "",
            localidade: "",
            alert: b? "Formulário Limpo!":""
        });        
    }

    render() {
        return(
            
            <IonPage>

                <IonHeader>
                <IonToolbar color="primary">
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle id="page-title">Atualizar perfil</IonTitle>
                </IonToolbar>
                </IonHeader>
    
                <IonContent className="PageContent">
                <IonLoading
      isOpen={this.state.loading!==""}
      onDidDismiss={() => {this.setState({loading: ""})}}
      message={this.state.loading}
    />
        <IonAlert
          isOpen={this.state.alert!==""}
          onDidDismiss={() => {this.setState({alert : ""}) ; if(this.state.alert ==="Informações atualizadas!") window.location.reload()} }
    
          header={'Aviso'}
          message={this.state.alert}
          buttons={['Ok, percebido!']}
        />

                    <IonGrid className="PageGrid">

                        <IonRow>
                            <IonCol size="2.5" className="Row1ProfilePic">
                                
                                <img className="profilePic" src={require('../imgs/perfil_pic.png')} alt="Loading..."/> 
                            
                            </IonCol>

                            <IonCol>

                                <IonGrid>

                                <div className="separador"></div>

                                    <IonRow>

                                        <IonCol className="FirstForm">

                                            <IonItem>
                                                <IonIcon slot="start" icon={closeOutline}></IonIcon>
                                                <IonLabel position="floating">Nome Completo <IonText color="danger">*</IonText></IonLabel>
                                                <IonInput disabled required value={""} onIonChange={(e) => {
                                                    this.setState({ nome_completo: (e.target as HTMLInputElement).value });
                                                }}></IonInput>
                                            </IonItem>                                           

                                            <IonItem>
                                                <IonIcon slot="start" icon={closeOutline}></IonIcon>
                                                <IonLabel position="floating">E-Mail <IonText color="danger">*</IonText></IonLabel>
                                                <IonInput disabled required value={""} onIonChange={(e) => {
                                                    this.setState({ email: (e.target as HTMLInputElement).value });
                                                }}></IonInput>
                                            </IonItem>                                           

                                            <IonItem>
                                                <IonIcon slot="start" icon={buildOutline}></IonIcon>
                                                <IonLabel position="floating">Definir nova password</IonLabel>
                                                <IonInput type="password" required value={this.state.password} onIonChange={(e) => {
                                                    this.setState({ password: (e.target as HTMLInputElement).value });
                                                }}></IonInput>
                                            </IonItem>                                           
 
                                            <IonItem>
                                                <IonIcon slot="start" icon={buildOutline}></IonIcon>
                                                <IonLabel position="floating">Nova Localidade</IonLabel>
                                                <IonInput value={this.state.localidade} onIonChange={(e) => {
                                                    this.setState({ localidade: (e.target as HTMLInputElement).value });
                                                }}></IonInput>
                                            </IonItem>                                           

                                            <IonItem>
                                                <IonIcon slot="start" icon={closeOutline}></IonIcon>
                                                <IonLabel position="floating">Nif</IonLabel>
                                                <IonInput disabled value={""} onIonChange={(e) => {
                                                    this.setState({ nif: (e.target as HTMLInputElement).value });
                                                }}></IonInput>
                                            </IonItem>                                           
                                           
                                        </IonCol>

                                    </IonRow>

                                    <div className="separador"></div>

                                    <IonRow>
                                        <IonCol>

                                            <IonItem className="SelectUser">
                                                <IonIcon slot="start" icon={closeOutline}></IonIcon>
                                                <IonIcon slot="start" icon={peopleCircleOutline}></IonIcon>
                                                <IonLabel>Tipo de sócio: </IonLabel>
                                                <IonSelect disabled value={""} onIonChange={(e) => this.setState({ tipoDeSocio: e.detail.value! })}>
                                                    <IonSelectOption value="Cliente Standard">Cliente Standard</IonSelectOption>
                                                    <IonSelectOption value="Cliente Premium">Cliente Premium</IonSelectOption>
                                                    <IonSelectOption value="Instrutor">Instrutor</IonSelectOption>
                                                    <IonSelectOption value="Rececionista">Rececionista</IonSelectOption>
                                                </IonSelect>
                                            </IonItem>

                                            <IonItem className="SelectGender">
                                                <IonIcon slot="start" icon={closeOutline}></IonIcon>
                                                <IonIcon slot="start" icon={transgenderOutline}></IonIcon>
                                                <IonLabel>Género: </IonLabel>
                                                <IonSelect disabled value={""} onIonChange={(e) => this.setState({ genero: e.detail.value! })}>
                                                    <IonSelectOption value="Masculino">Masculino</IonSelectOption>
                                                    <IonSelectOption value="Feminino">Feminino</IonSelectOption>
                                                    <IonSelectOption value="Não especificar">Não especificar</IonSelectOption>
                                                </IonSelect>
                                            </IonItem>
                                            
                                            <IonItem className="SelectDate">
                                            <IonIcon slot="start" icon={closeOutline}></IonIcon>
                                                <IonIcon slot="start" icon={calendarOutline}></IonIcon>
                                                <IonLabel>Data de Nascimento:</IonLabel>
                                                <IonDatetime disabled value={""} onIonChange={(e) => {this.setState({ data_nascimento: e.detail.value! })}}></IonDatetime>

                                            </IonItem>

                                        </IonCol>

                                    </IonRow>

                                    <div className="separador"></div>

                                    <IonRow className="buttonWrapper">

                                        <IonCol>
                                            <IonButton className="submitUser" expand="block" color="success" onClick={(event) => {
                                                event.preventDefault();
                                                this.createUpdateUserState();

                                            }}>Atualizar informações</IonButton>
                                        </IonCol>

                                        <IonCol>
                                            <IonButton className="clearForm" expand="block" color="light" onClick={() => {
                                                this.clearState(true);
                                            }}>Limpar formulário</IonButton>
                                        </IonCol>

                                    </IonRow>

                                </IonGrid>

                            </IonCol>
                        </IonRow>

                    </IonGrid>

                </IonContent>
                
            </IonPage>    
        );
    }
}

export default UpdateDetails;

    /*
        (nome + , email + , nif + , data_nasc, genero, categoria, localidade + ), 
        tipo (0:cliente, 1:instrutor, 2:rececionista)
        hash password
    */
