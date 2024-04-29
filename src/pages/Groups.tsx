import { useEffect, useState } from "react";
import { Card } from "flowbite-react";

import Page from "../components/Page";
import { getGroupings } from "../utils/APIClient";
import { Group } from "../types";

export default function GroupsPage() {
  
  const [groups, setGroups] = useState([]);
  
  useEffect(() => {
    const loadGroups = async () => {
      const data = await getGroupings();
      setGroups(data);
    }

    loadGroups();
  }, []);
  
  return (
    <Page>
      <div>
        {
          groups.map((group : Group )=> (
            <Card className="max-w-sm" href={`/group/${group.id}`}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                { group.name }
              </h5>
            </Card>
          ))
        }
      </div>
    </Page>
  )
}