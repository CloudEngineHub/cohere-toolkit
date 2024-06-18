import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { CreateAgent, useCohereClient } from '@/cohere-client';

export const useListAgents = () => {
  const cohereClient = useCohereClient();
  return useQuery({
    queryKey: ['listAgents'],
    queryFn: async () => {
      try {
        return await cohereClient.listAgents();
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  });
};

export const useCreateAgent = () => {
  const cohereClient = useCohereClient();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (request: CreateAgent) => {
      try {
        return await cohereClient.createAgent(request);
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['listAgents'] });
    },
  });
};

/**
 * @description Returns a function to check if an agent name is unique.
 */
export const useIsAgentNameUnique = () => {
  const { data: agents } = useListAgents();
  return (name: string) => !agents?.some((agent) => agent.name === name);
};

export const useUpdateAgent = () => {
  const cohereClient = useCohereClient();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (request: CreateAgent & { agentId: string }) => {
      try {
        return await cohereClient.updateAgent(request);
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['listAgents'] });
    },
  });
};
