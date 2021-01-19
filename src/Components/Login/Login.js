import './Login.css';
import React from 'react'

function Login() {
  return (
    <div id="LoginDiv">
      <h1>Please sign into Webex</h1>
      <button onClick={() => window.location.replace("https://webexapis.com/v1/authorize?client_id=C17879dfe79bfd7ef3deb1f4f0229e42d8688ffc82e6ad74ec2c7efa71de41f8e&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fwebex&scope=spark-admin%3Abroadworks_subscribers_write%20spark%3Aall%20analytics%3Aread_all%20meeting%3Aadmin_participants_read%20spark-admin%3Apeople_write%20spark-admin%3Aplaces_read%20spark-compliance%3Ateam_memberships_write%20spark-compliance%3Amessages_read%20spark-admin%3Adevices_write%20spark-admin%3Aworkspaces_write%20meeting%3Aadmin_schedule_write%20identity%3Aplaceonetimepassword_create%20spark-admin%3Acall_qualities_read%20spark-compliance%3Amessages_write%20spark%3Akms%20meeting%3Aparticipants_write%20spark-admin%3Apeople_read%20spark-compliance%3Amemberships_read%20spark-admin%3Aresource_groups_read%20meeting%3Arecordings_read%20meeting%3Aparticipants_read%20meeting%3Apreferences_write%20meeting%3Aadmin_recordings_read%20spark-admin%3Aorganizations_read%20meeting%3Aschedules_write%20spark-compliance%3Ateam_memberships_read%20spark-admin%3Adevices_read%20meeting%3Acontrols_read%20spark-admin%3Ahybrid_clusters_read%20meeting%3Aadmin_schedule_read%20meeting%3Aschedules_read%20spark-compliance%3Amemberships_write%20spark-admin%3Abroadworks_enterprises_read%20spark-admin%3Aroles_read%20meeting%3Arecordings_write%20meeting%3Apreferences_read%20spark-admin%3Aworkspaces_read%20spark-admin%3Aresource_group_memberships_read%20spark-compliance%3Aevents_read%20spark-admin%3Aresource_group_memberships_write%20spark-compliance%3Arooms_read%20spark-admin%3Abroadworks_subscribers_read%20meeting%3Acontrols_write%20meeting%3Aadmin_recordings_write%20spark-admin%3Ahybrid_connectors_read%20audit%3Aevents_read%20spark-compliance%3Ateams_read%20spark-admin%3Aplaces_write%20spark-admin%3Alicenses_read&state=set_state_here") }>
          Sign in with Webex 
      </button>
    </div>
  );
}

export default Login;