import './App.css';
import React from 'react'

function Login() {
  return (
    <div className="App">
      <form>
        <label>
          Email:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form>
        <label>
          Password:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={() => window.location.replace("https://webexapis.com/v1/authorize?client_id=C75b0829a09495f0f00c31e231e3eb162de5f549feadbdb6b645f60ffe6ddb035&response_type=code&redirect_uri=https%3A%2F%2Fgoogle.com&scope=spark-compliance%3Amemberships_read%20spark-admin%3Aresource_groups_read%20spark-admin%3Abroadworks_subscribers_write%20spark%3Aall%20meeting%3Arecordings_read%20meeting%3Aparticipants_read%20meeting%3Aadmin_participants_read%20meeting%3Apreferences_write%20spark-admin%3Apeople_write%20meeting%3Aadmin_recordings_read%20spark-admin%3Aorganizations_read%20spark-admin%3Aplaces_read%20meeting%3Aschedules_write%20spark-compliance%3Ateam_memberships_read%20spark-compliance%3Ateam_memberships_write%20spark-admin%3Adevices_read%20spark-admin%3Ahybrid_clusters_read%20meeting%3Acontrols_read%20spark-compliance%3Amessages_read%20meeting%3Aadmin_schedule_read%20spark-admin%3Adevices_write%20meeting%3Aadmin_schedule_write%20meeting%3Aschedules_read%20spark-compliance%3Amemberships_write%20spark-admin%3Abroadworks_enterprises_read%20identity%3Aplaceonetimepassword_create%20spark-admin%3Aroles_read%20meeting%3Arecordings_write%20meeting%3Apreferences_read%20spark-admin%3Aresource_group_memberships_read%20spark-compliance%3Aevents_read%20spark-admin%3Aresource_group_memberships_write%20spark-compliance%3Arooms_read%20spark-admin%3Acall_qualities_read%20spark-compliance%3Amessages_write%20spark-admin%3Abroadworks_subscribers_read%20spark%3Akms%20meeting%3Acontrols_write%20meeting%3Aadmin_recordings_write%20spark-admin%3Ahybrid_connectors_read%20audit%3Aevents_read%20spark-compliance%3Ateams_read%20spark-admin%3Aplaces_write%20meeting%3Aparticipants_write%20spark-admin%3Alicenses_read%20spark-admin%3Apeople_read&state=set_state_here") }>Hello </button>
    </div>
  );
}

export default Login;