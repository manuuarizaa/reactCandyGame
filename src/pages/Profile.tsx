import { IonCol, IonGrid, IonRow, IonPage, IonHeader, IonTitle, IonToolbar, IonContent } from '@ionic/react';
import './Profile.css';


const Profile: React.FC = () => {

    return(
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle className="ion-text-center">Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid fixed>
            <IonRow>
                <IonCol size="6">

                </IonCol>
                <IonCol size="6">
                    
                </IonCol>
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
    );
};

export default Profile;